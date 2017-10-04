import replies from './replies';
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
export default topics;