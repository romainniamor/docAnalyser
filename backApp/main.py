from business.docToText import get_pdf_text, get_text_chunks
from business.embedding import get_vectorstore, get_conversation_chain

from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI, UploadFile, File, Form

app = FastAPI()

origins = [
     "http://localhost:5173",
    "http://localhost:5174",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

global_conversation_chain = None
chat = None


@app.get("/")
def read_root():
    return "Welcome to docAnalyzer API!"

@app.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):
    global global_conversation_chain

    #get pdf text
    raw_text = get_pdf_text(file)
    print('raw_text', raw_text)

    #get text chunks
    text_chunks = get_text_chunks(raw_text)
    print('text_chunks', text_chunks)

    #create vectorestore
    vectorestore = get_vectorstore(text_chunks)
    print('vectorestore', vectorestore)

    #create conversation chain
    global_conversation_chain = get_conversation_chain(vectorestore)

    return {"message": "pdf uploaded and treated backend"}


@app.post("/get-request")
async def get_request(user_request: str = Form(...)):
    global global_conversation_chain
    global chat

    response = global_conversation_chain({'question': user_request})
    print('response', response)
    chat = response['chat_history']
    conversation = []

    for i in range(0, len(chat), 2): # On parcourt la liste par  2 pour avoir des paires question/réponse
        pair = {
            "question": chat[i].content if i < len(chat) else None, # On vérifie qu'on ne dépasse pas la taille de la liste
            "response": chat[i + 1].content if i + 1 < len(chat) else None
        }
        conversation.append(pair)

    return {"conversation": conversation }



