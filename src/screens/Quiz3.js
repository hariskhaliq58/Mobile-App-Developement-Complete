import React, { useState } from "react";

const friendsArray = [
    {
        id: 1,
        name: "handy",
        age: 19,
        hobbies: [
            { text: "Cooking", id: 1 },
            { text: "Reading", id: 2 },
        ]
    }
];

const App = () => {
    const [friends, setFriends] = useState(friendsArray);

    const handleAddFriend = () => {
        const newFriend = {
            id: friends.length + 1,
            name: "Syed Asfar Ahmad",
            age: 21,
            hobbies: []
        };
        setFriends((prevFriends) => [...prevFriends, newFriend]);
    };

    const handleSecondFriend = () => {
        setFriends((prevFriends) => {
            return prevFriends.map((friend, index) => {
                if (index === 1) {
                    return { ...friend, name: "Syed Asfar Ahmad Bukhari" };
                }
                return friend;
            });
        });
    };

    return (
        <main>
            <ul>
                {friends.map((friend) => (
                    <li key={friend.id}>
                        <span>Name: {friend.name}</span>{" "}
                        <span>Age: {friend.age}</span>{" "}
                        {friend.id === 1 && (
                            <span>
                                Hobbies:
                                <ul>
                                    {friend.hobbies.map((hobby) => (
                                        <li key={hobby.id}>{hobby.text}</li>
                                    ))}
                                </ul>
                            </span>
                        )}
                    </li>
                ))}
            </ul>
            <button onClick={handleAddFriend}>Add Friend</button>
            <button onClick={handleSecondFriend}>Change Second Friend Name</button>
        </main>
    );
};

export default App;
