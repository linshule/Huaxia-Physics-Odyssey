import {
    Color,
    Label,
    Node,
    Sprite,
    UIOpacity,
    UITransform,
    Vec3,
    builtinResMgr,
    SpriteFrame,
    Texture2D,
    Rect,
    Graphics
} from 'cc';

/**
 * 创建一个内容自适应的对话框节点
 * @param position 显示的位置
 * @param message 显示的文本内容
 * @returns 包含背景和文本的完整节点
 */
export function createDialogTextNode(position: Vec3, message: string): Node {
    const dialogNode = new Node('DialogBox');
    // position.x = position.x + 50;
    dialogNode.setPosition(position);

    // === 文本节点 ===
    const labelNode = new Node('Label');

    const labelTransform = labelNode.addComponent(UITransform);
    const label = labelNode.addComponent(Label);

    label.string = message;

    label.fontSize = 36;
    label.lineHeight = 44; // 行高略大于字体大小，避免重叠

    label.color = new Color(255, 255, 255);
    label.enableWrapText = true;
    label.overflow = Label.Overflow.RESIZE_HEIGHT;
    label.horizontalAlign = Label.HorizontalAlign.CENTER;
    label.verticalAlign = Label.VerticalAlign.CENTER;

    // 最大宽度：超过后自动换行
    const maxWidth = 1200;
    labelTransform.setContentSize(maxWidth, 0);

    // === 背景节点 ===
    const bgNode = new Node('BgRect');
    bgNode.setParent(dialogNode);
    labelNode.setParent(bgNode);
    bgNode.setPosition(0, 0);
    labelNode.setPosition(0, 0);

    const bgTransform = bgNode.addComponent(UITransform);
    const graphics = bgNode.addComponent(Graphics);
    graphics.fillColor = new Color(0, 0, 0, 200);
    graphics.rect(-1000, -100, 2000, 200); // 从 (0,0) 开始绘制
    graphics.fill();

    // === 等待 label 渲染后再调整背景尺寸 ===
    setTimeout(() => {
        const paddingX = 40;
        const paddingY = 20;

        const contentWidth = labelTransform.contentSize.width;
        const contentHeight = labelTransform.contentSize.height;

        bgTransform.setContentSize(contentWidth + paddingX, contentHeight + paddingY);
        labelTransform.setContentSize(contentWidth, contentHeight);
    }, 0);
    setTimeout(() => {
        dialogNode.active = false;
    }, 5000);
    return dialogNode;
}
