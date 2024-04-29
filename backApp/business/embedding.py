
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS

from langchain.memory import ConversationBufferMemory
from langchain_openai import ChatOpenAI
from langchain.chains import ConversationalRetrievalChain



from dotenv import load_dotenv

load_dotenv()

#vectorization

#create vectorstore
def get_vectorstore(text_chunks):
    embeddings = OpenAIEmbeddings()
    vectorstore = FAISS.from_texts(texts=text_chunks, embedding=embeddings)
    return vectorstore

#conversation chain creation memory: https://python.langchain.com/docs/modules/memory/types/buffer
#allow to generate new messages from previous messages, take history and return next message
def get_conversation_chain(vectorstore):
    memory = ConversationBufferMemory(memory_key='chat_history', return_messages=True)
    llm = ChatOpenAI(model="gpt-3.5-turbo-0125")
    conversation_chain = ConversationalRetrievalChain.from_llm(
        llm=llm,
        verbose=True,
        retriever=vectorstore.as_retriever(),
        memory=memory,
    )
    return conversation_chain

