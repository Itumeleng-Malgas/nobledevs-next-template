/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withLess({
  ...nextConfig,
  lessLoaderOptions: {
    // it's possible to use additionalData or modifyVars for antd theming
    // read more @ https://ant.design/docs/react/customize-theme
    //additionalData: (content) => `${content}\n@border-radius-base: 10px;`,

    lessOptions: {
      modifyVars: {
        'primary-color': '#032b64', // primary color for all components
        'link-color': '#1890ff', // link color
        'success-color': '#52c41a', // success state color
        'warning-color': '#faad14', // warning state color
        'error-color': '#f5222d', // error state color
        'font-size-base': '14px', // major text font size
        'heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
        'text-color': 'rgba(0, 0, 0, 0.65)', // major text color
        'text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
        'disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
        'border-radius-base': '4px', // major border radius
        'border-color-base': '#d9d9d9', // major border color
        'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // major shadow for layers
      },
    },
  },
});
