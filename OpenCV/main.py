import cv2
import pickle
import face_recognition
import numpy as np
cap= cv2.VideoCapture(0)

camH=640
camW=480

cap.set(3,640)
cap.set(4,480)
imgB=cv2.imread('BG.png')

print('Loading file...')
file =open('EncodingFile.p','rb')
encodeListKnownIds=pickle.load(file)
file.close()
encodeListKnown ,memberIds=encodeListKnownIds
print('File loaded')


while True:
    success, img= cap.read()
    imgB[31:31+480,57:57+640]=img

    imgS=cv2.resize(img , (0,0) , None , 0.25 ,0.25)
    img=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)

    faceCurr=face_recognition.face_locations(imgS)
    encodeCurr=face_recognition.encodings(imgS,faceCurr)

    for encodeface, faceLoc in zip(encodeCurr,faceCurr):
        matches=face_recognition.compare_faces(encodeListKnown,encodeface)
        faceDis=face_recognition.face_distance(encodeListKnown,encodeface)
        print("matches",matches)
        print('faceDis : ' , faceDis)

        matchIndex= np.argmin(faceDis)
        print('Roll No. : ',memberIds[matchIndex]) #memberIds(matchIndex) gives the roll no. or the file name.
    if success:
        cv2.imshow("Webcam (Press 'ESC' to exit)",imgB)
    key=cv2.waitKey(27)
    
    if key==27:
        break
cv2.destroyAllWindows()