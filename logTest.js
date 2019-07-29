module.exports = async function(context, commands) {
    return await commands.measure.start('http://localhost:8080/baseline.html', 'baseline');
};
