import cv2
import face_recognition
import os
import pickle

folderPath='members'
pathList=os.listdir(folderPath)
imgList=[]
memberIds=[]

for path in pathList:
    imgList.append(cv2.imread(os.path.join(folderPath,path)))
    # print(os.path.join(folderPath,path),path)
    memberIds.append(os.path.splitext(path)[0])
print(memberIds)

def findEncodings(imagesList):
    encodeList=[]
    for img in imagesList:
        img=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
        encode=face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
    
    return encodeList

print('encoding started..')
encodeListKnown=findEncodings(imgList)
encodeListKnownIds=(encodeListKnown,memberIds)
print(encodeListKnown)
print("encoding done")

file = open('EncodingFile.p','wb')
pickle.dump(encodeListKnownIds,file )
file.close()