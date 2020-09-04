import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';


export default class MyTable extends Component {
  render() {
    const columns = [
      {
        title: '商品名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '数量',
        dataIndex: 'acount',
        key: 'acount',
      },
      {
        title: '单价',
        dataIndex: 'unitPrice',
        key: 'addunitPriceress',
      },
      {
        title: '单位',
        key: 'unit',
        dataIndex: 'unit',
        render: tags => (
          <>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: '操作',
        key: 'action',
        render: () => (
          <Space size="middle">
            <p>Delete</p>
          </Space>
        ),
      },
    ];

    const footerColumns = [
      {
        title: '合计',
        dataIndex: 'sum',
        key: 'sum',
      },
    ]

    const data = this.props.cartList;
    return (
      <div>
        <Table columns={columns} dataSource={data} pagination={false} rowSelection style={{ marginTop: '20px' }}  />
        <Table columns={footerColumns} style={{float:"right"}}/>
      </div>
    )
  }
}
