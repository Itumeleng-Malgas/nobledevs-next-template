import BaseTemplate from '../../components/templates/base/BaseTemplate';
import { mockBaseTemplateProps } from '../../components/templates/base/BaseTemplate.mocks';

const Template = () => {
  return <BaseTemplate {...mockBaseTemplateProps.base} />;
};

export default Template;
