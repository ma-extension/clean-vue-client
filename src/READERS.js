export default READERS = [
    {
        name: 'onepiece-ex',
        hostname: "onepiece-ex.com.br",
        regex_expression: /https:\/\/onepiece-ex\.com\.br\/mangas\/leitor\/(?<cap>[0-9]*)\/#(?<page>[0-9]*)/,
        exclusive_for: 'One Piece'
    },
    {
        name: 'central-de-mangas',
        hostname: "cdmnet.com.br",
        regex_expression: /http:\/\/cdmnet\.com\.br\/titulos\/(?<manga>[a-zA-Z0-9\-\_\%]*)\/manga\/ler-online\/(?<cap>[0-9]*)#(?<page>[0-9]*)$/,
    }
]