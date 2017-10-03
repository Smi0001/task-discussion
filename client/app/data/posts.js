// Users
let users = {
    user1: {
          name: 'Mr. Abc', userImg: 'app/data/img/user0.png'
        },
    user2: {
        name: 'Mrs. Def', userImg: 'app/data/img/user1.png'
        },
        user3: {
    name: 'Mr. Ghi', userImg: 'app/data/img/user2.png'
    },
    user4: {
        name: 'Mr. jkl', userImg: 'app/data/img/user3.png'
        },
    user5: {
        name: 'Mr. Mno', userImg: 'app/data/img/user4.png'
        }
}

// Replies
let replies = {
    reply1: {
        date: 123,
        comments: `reply1 - Lorem ipsum is a pseudo-Latin text used in web design,
         typography, layout, and printing in place of English to emphasise design elements over content.
          It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.`
    },
    reply2: {
        date: 124,
        comments: `reply2 - Lorem ipsum dolor sit amet`
    },
    reply3: {
        date: 125,
        comments: `reply3 - consectetur adipiscing elit,`
    },
    reply4: {
        date: 126,
        comments: `reply4 - sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    reply5: {
        date: 127,
        comments: `reply5 - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`
    },
    
}

//   Topics
let topics = {
    topic1: {
        note: 'What are the best websites that a geek must visit?',
        desc: `I created this list after going through hundred of my bookmarks which are created over the time of years. Most of the sites listed below are regularly visited by millions of visitor monthly.
        I am su... `,
        replies: [replies.reply1, replies.reply2, replies.reply3]
    },
    topic2: {
        note: 'If you decided to build a social media network, whom are you going to target?',
        desc: `The old.
        
        Before you think I am crazy, let me explain.
        
        Snapchat has attracted the 13–24 age demographic with fun filters and lenses.
        
        Instagram has taken over the 18 to 34 demographic...`,
        replies: [replies.reply2, replies.reply1]
    }, 
    topic3: {
        note: 'What technologies will be available by the 2020s?',
        desc: `Can you see the resemblance between this
        
        and this?
        
        The first image shows a 2017 quantum computer while the second one shows one of the first “traditional” computers.
        
        By the late 20s we'll definitely s...`,
        replies: [replies.reply3]
    }, 
    topic4: {
        note: 'Is A.I. an existential threat to humanity?',
        desc: `Worrying about AI evil superintelligence today is like worrying about overpopulation on the planet Mars. We haven't even landed on the planet yet!
        
        AI has made tremendous progress, and I'm wildly op...`,
        replies: [replies.reply4]
    },
    topic5: {
        note: 'What will be the next big thing programmers should start learning?',
        desc: `I’m currently learning Web Assembly.
        
        It’s not a “thing” yet - but IMHO, it’s going to be HUGE.
        
        Right now, if you want to write a program that runs in a browser - you MUST write it in JavaScript (or u...`,
        replies: [replies.reply5]
    },

}

// Posts
let post1 = {
    date: 1506910207672,//date
    user: users.user1,
    topic: topics.topic1
};
let post4 = {
    date: 1506865000777,//date
    user: users.user4,
    topic: topics.topic4
};
let post5 = {
    date: 1500065770777,//date
    user: users.user5,
    topic: topics.topic5
};
let post2 = {
    date: 1506865770777,//date
    user: users.user2,
    topic: topics.topic2
};
let post3 = {
    date: 1506865000777,//date
    user: users.user3,
    topic: topics.topic3
};
let post6 = {
    date: 1500065770777,//date
    user: users.user5,
    topic: topics.topic5
};
let post7 = {
    date: 1500065770777,//date
    user: users.user3,
    topic: topics.topic3
};

let posts;
export default posts = [
    post1,
    post4,
    post3,
    post5,
    post2,
    post6,
    post7
];