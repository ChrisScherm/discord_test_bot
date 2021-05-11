
const replies = [
    'Quack',
    'Owa Owa',
    ':duck:',
    ':bird:'
]

module.exports = function (msg, args) {
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index]);
}
