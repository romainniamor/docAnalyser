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
    print('global_conversation_chain', global_conversation_chain)

    return {"message": "pdf uploaded and treated backend"}






