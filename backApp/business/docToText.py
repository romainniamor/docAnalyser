from PyPDF2 import PdfReader
from fastapi import UploadFile
import io


 #extract text from pdf https://pypi.org/project/PyPDF2/
def get_pdf_text(file: UploadFile):
    #use io.BytesIO to convert file to bytes and pass it to PdfReader without saving it
    file_content = io.BytesIO(file.file.read())
    text = ""
    pdf_reader = PdfReader(file_content)
    for page in pdf_reader.pages:
        text += page.extract_text()

    return text