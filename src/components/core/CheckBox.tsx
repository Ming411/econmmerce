import React, {useEffect, FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Typography, Checkbox as AntdCheckbox} from 'antd';
import {getCategory} from '../../store/actions/category.actions';
import {AppState} from '../../store/reducers';
import {CategoryState} from '../../store/reducers/category.reducer';
import {CheckboxValueType} from 'antd/lib/checkbox/Group';
interface props {
  handleFilter: (arg: string[]) => void;
}
const {Title} = Typography;
const CheckBox: FC<props> = ({handleFilter}) => {
  const dispatch = useDispatch();
  const category = useSelector<AppState, CategoryState>(state => state.category);
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  const onChange = (value: CheckboxValueType[]) => {
    // console.log(value);
    handleFilter(value as string[]);
  };
  return (
    <>
      <Title level={4}>按照分类筛选</Title>
      <AntdCheckbox.Group
        className='checkBoxFilter'
        options={category.category.result.map(item => ({
          label: item.name,
          value: item._id
        }))}
        onChange={onChange}
      />
    </>
  );
};

export default CheckBox;
