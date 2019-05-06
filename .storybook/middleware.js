const proxy = require('http-proxy-middleware');

module.exports = router => {
    ['/insights', '/insightsbeta'].forEach(path =>
        router.use(path, proxy({
            target: 'https://cloud.redhat.com',
            secure: false,
            changeOrigin: true,

            // Not sure why but some of the proxies mess up gziped content which results
            // in ERR_CONTENT_DECODING_FAILED with Chrome. Therefore, I am modifying the
            // request here to ask for non-gzipped response.
            onProxyReq(proxyReq, req, res) {
                proxyReq.setHeader('accept-encoding', 'identity');
            }
        })));
}
