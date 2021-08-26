require('ignore-styles')

require('@babel/register')({
    ignore: [/(node_module)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
})

if (typeof window === 'undefined') {
    global.window = {}
}

require('./server')