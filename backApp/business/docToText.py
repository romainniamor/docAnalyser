from PyPDF2 import PdfReader
from fastapi import UploadFile
from langchain.text_splitter import CharacterTextSplitter
import io

# def extract_text_from_pdf(pdf_path):
#     try:
#         text = ""
#         with open(pdf_path, "rb") as file:
#             pdf_reader = PdfReader(file)
#             for page in pdf_reader.pages:
#                 text += page.extract_text()
#         return text
#     except Exception as e:
#         return str(e)


 #extract text from pdf https://pypi.org/project/PyPDF2/
def get_pdf_text(file: UploadFile):
    #use io.BytesIO to convert file to bytes and pass it to PdfReader without saving it
    file_content = io.BytesIO(file.file.read())
    text = ""
    pdf_reader = PdfReader(file_content)
    for page in pdf_reader.pages:
        text += page.extract_text()

    return text



#creation list of text chunks cut by 1000 characters with 200 characters overlap between each chunk
def get_text_chunks(text):
    text_splitter = CharacterTextSplitter(
    separator = "\n",
    chunk_size = 1000,
    chunk_overlap=200,
    length_function=len
    )
    chunks = text_splitter.split_text(text)

    return chunks

