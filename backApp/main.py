from business.docToText import get_pdf_text
from fastapi.middleware.cors import CORSMiddleware



from fastapi import FastAPI

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


@app.get("/")
def read_root():
    return "Welcome to docAnalyzer API!"

@app.post("/upload-pdf")
async def upload_pdf(file):
    #get pdf text
    raw_text = get_pdf_text(file)
    print('raw_text', raw_text)

    return {"message": "pdf uploaded and treated"}


