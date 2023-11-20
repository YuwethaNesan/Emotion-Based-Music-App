import random

# Dictionary mapping emotions to songs
emotion_songs = {
    "happy": ["Song1", "Song2", "Song3"],
    "sad": ["Song4", "Song5", "Song6"],
    "relaxed": ["Song7", "Song8", "Song9"],
    "energetic": ["Song10", "Song11", "Song12"]
}

def suggest_song(emotion):
    # Convert the input emotion to lowercase for case-insensitivity
    emotion = emotion.lower()
    
    # Check if the input emotion is in the dictionary
    if emotion in emotion_songs:
        # Randomly select a song from the list of songs associated with the emotion
        suggested_song = random.choice(emotion_songs[emotion])
        return suggested_song
    else:
        return "Sorry, no suggestions for that emotion. Try happy, sad, relaxed, or energetic."

def main():
    # Get user input for their current emotion
    user_emotion = input("Enter your current emotion (happy, sad, relaxed, energetic): ")
    
    # Get the suggested song based on the user's emotion
    suggested_song = suggest_song(user_emotion)
    
    # Display the suggested song
    print(f"Suggested song for {user_emotion}: {suggested_song}")

if __name__ == "__main__":
    main()
