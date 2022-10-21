//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

// Because Next.js doesn't transpile/bundle node_modules in server (SSR) build, you need to tweak Next webpack configuration to transpile the ES modules of the released design system.

// next-transpile-modules does this, so you need to set it up in your project
const withTM = require('next-transpile-modules')(['echarts', 'zrender']);

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
};

module.exports = withTM(withNx(nextConfig));
