import { HappyProvider } from '@ant-design/happy-work-theme';
import { Button, Anchor, Space, ColorPicker } from 'antd';
import { useState } from 'react';

const Animation = () => {
  const [changePart1, setChangePart1] = useState('yellow');
  return (
    <div>
      <div
        style={{
          padding: '20px',
        }}
      >
        <Anchor
          direction="horizontal"
          items={[
            {
              key: 'part-1',
              href: '#part-1',
              title: 'animation',
            },
            {
              key: 'part-2',
              href: '#part-2',
              title: 'fix code',
            },
            {
              key: 'part-3',
              href: '#part-3',
              title: 'clone code',
            },
          ]}
        />
      </div>
      <div>
        <div
          id="part-1"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: changePart1,
          }}
        >
          <HappyProvider>
            <Button>animation 1</Button>
            <Button type="primary">Primary</Button>
            <Space direction="vertical">
              <ColorPicker
                defaultValue="#1677ff"
                size="large"
                showText
                value={changePart1}
                onChange={(color, hex) => {
                  console.log('color', color);
                  console.log('hex', hex);
                  setChangePart1(hex);
                }}
              />
            </Space>
          </HappyProvider>
        </div>
        <div
          id="part-2"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: 'red',
          }}
        >
          <HappyProvider>
            <Button>animation 2</Button>
            <Button type="primary">Primary</Button>
          </HappyProvider>
        </div>
      </div>
    </div>
  );
};

export default Animation;
