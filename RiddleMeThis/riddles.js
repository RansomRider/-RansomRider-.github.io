const riddles = [
    {
        question: 'What has to be broken before you can use it?',
        choices: ['Glass', 'Egg', 'Seal'],
        answer: 'Egg'
    },
    {
        question: 'I’m tall when I’m young, and I’m short when I’m old. What am I?',
        choices: ['Tree', 'Candle', 'Mountain'],
        answer: 'Candle'
    },
    {
        question: 'What comes once in a minute, twice in a moment, but never in a thousand years?',
        choices: ['Time', 'Letter M', 'Opportunity'],
        answer: 'Letter M'
    }
    ,
    {
        question: 'What can travel around the world while staying in a corner?',
        choices: ['Ball', 'Stamp', 'Postage'],
        answer: 'Stamp'
    },
    {
        question: 'What word becomes shorter when you add two letters to it?',
        choices: ['tall', 'short', 'subtract'],
        answer: 'short'
    },
    {
        question: 'The more of this there is, the less you see. What is it?',
        choices: ['Light', 'Darkness', 'Smoke'],
        answer: 'Darkness'
    },
    {
        question: 'What has a head, a tail, is brown, and has no legs?',
        choices: ['Coin', 'Snake', 'Drum'],
        answer: 'Coin'
    },
    {
        question: 'What has words but never speaks?',
        choices: ['Book', 'Animal', 'Painting'],
        answer: 'Book'
    },
    {
        question: 'What is always in front of you but can’t be seen?',
        choices: ['Future', 'Past', 'Air'],
        answer: 'Future'
    },
    {
        question: 'What can you catch but not throw?',
        choices: ['Cold', 'Sleep', 'Time'],
        answer: 'Cold'
    },
    {
        question: 'What has a face and two hands but no arms or legs?',
        choices: ['Watch', 'Clock', 'Mirror'],
        answer: 'Clock'
    },
    {
        question: 'What has a mouth but can’t eat?',
        choices: ['River', 'Volcano', 'Cave'],
        answer: 'River'
    },
    {
        question: 'What has keys but can’t drive a car?',
        choices: ['Lock', 'Keyboard', 'Remote'],
        answer: 'Keyboard'
    },
    {
        question: 'What has one eye but can’t see?',
        choices: ['Needle', 'Cyclops', 'Camera'],
        answer: 'Needle'
    },
    {
        question: 'What gets wetter as it dries?',
        choices: ['Towel', 'Soap', 'Sun'],
        answer: 'Towel'
    },
    {
        question: 'What has many keys but can’t unlock anything?',
        choices: ['Song', 'Janitor', 'Key Master'],
        answer: 'Song'
    },
    {
        question: 'What can be cracked, made, told, and played?',
        choices: ['Joke', 'Egg', 'Music'],
        answer: 'Joke'
    },
    {
        question: 'What has a heart that doesn’t beat?',
        choices: ['Clock', 'Fish', 'Onion'],
        answer: 'Artichoke'
    },
    {
        question: 'What has a thumb and four fingers but isn’t alive?',
        choices: ['Glove', 'Hand', 'Monkey'],
        answer: 'Glove'
    },
    {
        question: 'What tastes better than it smells?',
        choices: ['Tongue', 'Coffee', 'Salt'],
        answer: 'Tongue'
    },
    {
        question: 'What has a neck but no head?',
        choices: ['Turtle', 'Bottle', 'Giraffe'],
        answer: 'Bottle'
    },
    {
        question: 'What has many teeth but cannot bite?',
        choices: ['Comb', 'Saw', 'Fork'],
        answer: 'Comb'
    },
    {
        question: 'What has a ring but no finger?',
        choices: ['Telephone', 'Planet', 'Engagement Ring'],
        answer: 'Planet'
    },
    {
        question: 'What has a bed but never sleeps?',
        choices: ['River', 'Garden', 'Train'],
        answer: 'River'
    },
    {
        question: 'What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?',
        choices: ['River', 'Clock', 'Refrigerator'],
        answer: 'River'
    },
    {
        question: 'What has a heart that doesn’t beat?',
        choices: ['Artichoke', 'Stone', 'Book'],
        answer: 'Artichoke'
    },
    {
        question: 'What comes down but never goes up?',
        choices: ['Rain', 'Stairs', 'Shadow'],
        answer: 'Rain'
    },
    {
        question: 'I shave every day, but my beard stays the same. What am I?',
        choices: ['Barber', 'Clock', 'Mountain'],
        answer: 'Barber'
    },
    {
        question: 'What has many keys but can’t open a single lock?',
        choices: ['Piano', 'Map', 'Computer'],
        answer: 'Piano'
    },
    {
        question: 'What has a thumb and four fingers but is not alive?',
        choices: ['Glove', 'Hand', 'Robot'],
        answer: 'Glove'
    },
    {
        question: 'What has a head, a tail, is brown, and has no legs?',
        choices: ['Coin', 'Horse', 'Chair'],
        answer: 'Coin'
    },
    {
        question: 'What gets wetter as it dries?',
        choices: ['Towel', 'Paint', 'Clay'],
        answer: 'Towel'
    },
    {
        question: 'What has one eye but cannot see?',
        choices: ['Needle', 'Cyclops', 'Potato'],
        answer: 'Needle'
    },
    {
        question: 'What is so fragile that saying its name breaks it?',
        choices: ['Silence', 'Glass', 'Bubble'],
        answer: 'Silence'
    },
    {
        question: 'What has a ring but no finger?',
        choices: ['Telephone', 'Jewelry', 'Planet'],
        answer: 'Telephone'
    },
    {
        question: 'What is full of holes but still holds water?',
        choices: ['Sponge', 'Net', 'Bucket'],
        answer: 'Sponge'
    },
    {
        question: 'What belongs to you, but others use it more than you do?',
        choices: ['Your name', 'Your money', 'Your clothes'],
        answer: 'Your name'
    },
    {
        question: 'What goes up but never comes down?',
        choices: ['Age', 'Smoke', 'Helium balloon'],
        answer: 'Age'
    },
    {
        question: 'What can you catch but not throw?',
        choices: ['Cold', 'Ball', 'Frisbee'],
        answer: 'Cold'
    },
    {
        question: 'I’m tall when I’m young and short when I’m old. What am I?',
        choices: ['Candle', 'Tree', 'Person'],
        answer: 'Candle'
    },
    {
        question: 'What has words, but never speaks?',
        choices: ['Book', 'Sign', 'Person'],
        answer: 'Book'
    },
    {
        question: 'What runs around the whole yard without moving?',
        choices: ['Fence', 'Dog', 'Grass'],
        answer: 'Fence'
    },
    {
        question: 'What can be cracked, made, told, and played?',
        choices: ['Joke', 'Egg', 'Code'],
        answer: 'Joke'
    },
    {
        question: 'What has a bank but no money?',
        choices: ['River', 'Game', 'Phone'],
        answer: 'River'
    },
    {
        question: 'What rock group consists of four famous men, but none of them sing?',
        choices: ['The Beatles', 'Mount Rushmore', 'Queen'],
        answer: 'Mount Rushmore'
    },
    {
        question: 'I Start with M, end with X, and have a never-ending amount of letters. What am I?',
        choices: ['Mailbox', 'Max', 'Matrix'],
        answer: 'Mailbox'
    },
    {
        question: 'What is orange and sounds like a parrot?',
        choices: ['Carrot', 'Trump', 'Garfield'],
        answer: 'Carrot'
    },
    {
        question: 'What has fur but is not a mammal',
        choices: ['Snake', 'Fern', 'Coconut'],
        answer: 'Coconut'
    },
    {
        question: 'I make a loud sound when I’m changing. When I do change, I get bigger but weigh less. What am I?',
        choices: ['Matter', 'Butterfly', 'Popcorn'],
        answer: 'Popcorn'
    },
    {
        question: 'What blooms and is not a flower?',
        choices: ['Algae', 'Cloud', 'Cactus'],
        answer: 'Algae'
    },
    {
        question: 'What fruit can you never cheer up?',
        choices: ['Melon', 'Blueberry', 'Strawberry'],
        answer: 'Blueberry'
    }
];


// Shuffle the riddles array
riddles.sort(() => Math.random() - 0.5);

// Shuffle the choices in each riddle
riddles.forEach(riddle => {
    riddle.choices.sort(() => Math.random() - 0.5);
});

export { riddles };
