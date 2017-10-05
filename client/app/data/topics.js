import replies from './replies';
//   Topics
let topics = {
    topic1: {
        note: 'What are the best websites that a geek must visit?',
        replies: [replies.reply1, replies.reply2, replies.reply3]
    },
    topic2: {
        note: 'If you decided to build a social media network, whom are you going to target?',
        replies: [replies.reply2, replies.reply1]
    }, 
    topic3: {
        note: 'What technologies will be available by the 2020s?',
        replies: [replies.reply3]
    }, 
    topic4: {
        note: 'Is A.I. an existential threat to humanity?',
        replies: [replies.reply4]
    },
    topic5: {
        note: 'What will be the next big thing programmers should start learning?',
        replies: [replies.reply5]
    },

}
export default topics;