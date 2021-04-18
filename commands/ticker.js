module.exports = {
    prefix: "!ticker",
    fn: (msg) => {
        const args = msg.content.split(' ')
        msg.channel.send("TODO!")
    }
}