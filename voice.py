import speech_recognition as sr

# Initialize speech recognition and microphone
r = sr.Recognizer()

# Use the default system microphone as the audio source
mic = sr.Microphone()

# Adjust microphone for ambient noise
with mic as source:
    r.adjust_for_ambient_noise(source)

    while True:
        print("Listening...")
        audio = r.listen(source)
        
        try:
            # Recognize speech from audio
            command = r.recognize_google(audio)
            print(f"Recognized: {command}")

            if command.lower() == 'switch on':
                print("Switch is on")
                # Perform action based on the recognized command

            else:
                print("Command not recognized")

        except sr.UnknownValueError:
            print("No audio detected or could not understand audio")
        except sr.RequestError as e:
            print(f"Could not request results from Google Speech Recognition service; {e}")

