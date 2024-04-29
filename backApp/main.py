from fastapi import FastAPI

app = FastAPI()


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


    return {"message": "pdf uploaded and treated"}

