import React from 'react';
import { TemplateAnnotations } from '@magnolia/template-annotations';
import PropTypes from 'prop-types';
import { EditableComponent } from '../EditableComponent';
import {
    EditorContext, constants, EditorContextHelper, ComponentHelper
} from '../../util';

class EditableArea extends React.PureComponent {
    static propTypes = {
        content: PropTypes.object.isRequired,
        parentTemplateId: PropTypes.string,
        className: PropTypes.any,
        wrapperComponent: PropTypes.node,
        children: PropTypes.node
    };

    static defaultProps = {
        parentTemplateId: null,
        className: null,
        wrapperComponent: null,
        children: null
    }

    constructor(props) {
        super(props);
        this.constants = constants;
    }

    componentDidMount() {
        if (!this.context) {
            throw new Error('EditableArea component must be wrapped inside EditablePage component.');
        }
        this.addComment();
    }

    static contextType = EditorContext;

    getParentTemplateId() {
        const { parentTemplateId } = this.props;
        const { content } = this.context;

        return parentTemplateId || content[constants.TEMPLATE_ID_PROP];
    }

    addComment() {
        const { isDevMode } = this.context;
        if (!this.node || (!isDevMode && !EditorContextHelper.inEditor())) {
            return;
        }
        const { content } = this.props;
        const pageTemplateId = this.getParentTemplateId();
        const { templateDefinitions: allDefinitions } = this.context;
        const templateDefinitions = allDefinitions[pageTemplateId];
        const openComment = TemplateAnnotations.getAreaCommentString(content, templateDefinitions);
        this.node.parentNode.insertBefore(document.createComment(openComment), this.node);
        this.node.parentNode.insertBefore(document.createComment(this.constants.CLOSED_AREA_COMMENT), this.node.nextSibling);
    }

    render() {
        const {
            content, className, children, wrapperComponent
        } = this.props;
        const componentNames = content['@nodes'];
        const AreaWrapper = wrapperComponent || React.createElement('div').type;
        return (
            <AreaWrapper ref={node => this.node = node} key={content['@id']} className={ComponentHelper.classnames(className)}>
                {children}
                {
                    componentNames.map((name) => <EditableComponent key={content[name]['@id']} content={content[name]} wrapperComponent={wrapperComponent} />)
                }
            </AreaWrapper>
        );
    }
}

export default EditableArea;
