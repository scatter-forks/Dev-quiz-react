import React, { Component } from 'react'
import { Card, Row, Col, Divider, Rate, } from 'antd';
import { BookOutlined, } from '@ant-design/icons';
import PandaIcon from '../icon/PandaIcon';
import { createFromIconfontCN as IconFont } from '@ant-design/icons';


const { Meta } = Card;
const Icon = IconFont({
    scriptUrl: [
        '//at.alicdn.com/t/font_1874562_iwoj7kz2ysk.js'
      ],
})


export default class Home extends Component {

    state = {
        product:this.props.product,
    }

    render() {
        const {addProduct, product} = this.props
        
        return (
            <div>
                <Divider orientation="left" style={{fontSize:'25px'}}><BookOutlined /></Divider>
                <Row gutter={[96,26]} justify="start" >
                    <Col className="gutter-row" span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1986239545,3915630820&fm=15&gp=0.jpg" />}>
                            <Meta title="康熙" description="康熙王朝的起起伏伏" />
                            <Rate allowHalf disabled defaultValue={4.5} style={{marginTop:'5px'}}/>
                            <div style={{fontSize:'30px',display:'flex',justifyContent:'center', alignItems:'baseline'}}>
                                <Icon type="icon-money" style={{float:'left'}}/>
                                <span style={{fontSize:'40px',margin:'0 22px', color:'red'}}>33.9</span>
                                <Icon type="icon-zengjia"style={{float:'right'}} onClick={addProduct}/>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2619325615,1473784378&fm=15&gp=0.jpg" />}>
                            <Meta title="伊索寓言全集" description="读伊索寓言,使人聪明" />
                            <Rate allowHalf disabled defaultValue={4.5} style={{marginTop:'5px'}}/>
                            <div style={{fontSize:'30px',display:'flex',justifyContent:'center', alignItems:'baseline'}}>
                                <Icon type="icon-money" style={{float:'left'}}/>
                                <span style={{fontSize:'40px',margin:'0 22px', color:'red'}}>27.5</span>
                                <Icon type="icon-zengjia"style={{float:'right'}} onClick={addProduct}/>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2292527201,341994502&fm=15&gp=0.jpg" />}>
                            <Meta title="中国书法一本通" description="学习中国书法,一本就够了" />
                            <Rate allowHalf disabled defaultValue={4} style={{marginTop:'5px'}}/>
                            <div style={{fontSize:'30px',display:'flex',justifyContent:'center', alignItems:'baseline'}}>
                                <Icon type="icon-money" style={{float:'left'}}/>
                                <span style={{fontSize:'40px',margin:'0 22px', color:'red'}}>17.5</span>
                                <Icon type="icon-zengjia"style={{float:'right'}} onClick={addProduct}/>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2174147425,1821630867&fm=15&gp=0.jpg" />}>
                            <Meta title="出海总动员" description="让孩子在知识的海洋里遨游" />
                            <Rate allowHalf disabled defaultValue={4.5} style={{marginTop:'5px'}}/>
                            <div style={{fontSize:'30px',display:'flex',justifyContent:'center', alignItems:'baseline'}}>
                                <Icon type="icon-money" style={{float:'left'}}/>
                                <span style={{fontSize:'40px',margin:'0 22px', color:'red'}}>23.9</span>
                                <Icon type="icon-zengjia"style={{float:'right'}} onClick={addProduct}/>
                            </div>
                        </Card>
                    </Col>
                    
                </Row>
                <Divider orientation="left" style={{fontSize:'25px'}}><PandaIcon /> </Divider>
                <Row gutter={[96,26]} justify="start" >
                    <Col className="gutter-row" span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1136943329,559028985&fm=15&gp=0.jpg" />}>
                            <Meta title="粉红喵" description="一个粉红的童年" />
                            <Rate allowHalf disabled defaultValue={4} style={{marginTop:'5px'}}/>
                            <div style={{fontSize:'30px',display:'flex',justifyContent:'center', alignItems:'baseline'}}>
                                <Icon type="icon-money" style={{float:'left'}}/>
                                <span style={{fontSize:'40px',margin:'0 22px', color:'red'}}>48</span>
                                <Icon type="icon-zengjia"style={{float:'right'}} onClick={addProduct}/>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3192033099,626659484&fm=15&gp=0.jpg" />}>
                            <Meta title="憨憨熊" description="其乐融融一家人" />
                            <Rate allowHalf disabled defaultValue={5} style={{marginTop:'5px'}}/>
                            <div style={{fontSize:'30px',display:'flex',justifyContent:'center', alignItems:'baseline'}}>
                                <Icon type="icon-money" style={{float:'left'}}/>
                                <span style={{fontSize:'40px',margin:'0 22px', color:'red'}}>89.9</span>
                                <Icon type="icon-zengjia"style={{float:'right'}} onClick={addProduct}/>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
