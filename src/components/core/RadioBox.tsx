import React, {FC} from 'react';
import {Typography, List, Radio, RadioChangeEvent} from 'antd';
import prices from '../../helpers/price';
const {Title} = Typography;
interface props {
  handleFilter: (arg: number[]) => void;
}
const RadioBox: FC<props> = ({handleFilter}) => {
  const onChange = (e: RadioChangeEvent) => {
    handleFilter(e.target.value);
  };
  return (
    <>
      <Title level={4}>按照价格筛选</Title>
      <Radio.Group>
        <List
          dataSource={prices}
          renderItem={item => (
            <List.Item>
              <Radio value={item.array} onChange={onChange}>
                {item.name}
              </Radio>
            </List.Item>
          )}
        />
      </Radio.Group>
    </>
  );
};

export default RadioBox;
