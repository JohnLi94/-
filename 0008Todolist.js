import React,{Component} from 'react';

import '../assets/css/index.css';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    title:'录制ionic',
                    checked:true
                },
                {
                    title:'录制nodejs',
                    checked:false
                }
                ,
                {
                    title:'录制egg.js',
                    checked:true
                } ,
                {
                    title:'录制vue',
                    checked:false
                }
            ]
        };
    }   

    addData=(e)=>{
        //按下回车的时候在增加

        if(e.keyCode==13){

                
            // alert(title);

            let title=this.refs.title.value;
            let tempList=this.state.list;

            tempList.push({
                title:title,
                checked:false
            })
            //改变后的值赋值给list

            this.setState({

                list:tempList
            })


            //表单置为空
            this.refs.title.value='';

            //执行缓存数据
            localStorage.setItem('todolist' , JSON.stringify(tempList));     //将当前数据转换成一个JSON字符串

        }
    }
    checkboxChage=(key)=>{

        // alert('111');
        let tempList=this.state.list;

        tempList[key].checked=!tempList[key].checked;


        this.setState({

            list:tempList
        })

         //执行缓存数据
         localStorage.setItem('todolist' , JSON.stringify(tempList));     //将当前数据转换成一个JSON字符串

    }
    removeData=(key)=>{

        let tempList=this.state.list;


        // 删除数据
        tempList.splice(key,1);     


         this.setState({

            list:tempList
        })


         //执行缓存数据
         localStorage.setItem('todolist' , JSON.stringify(tempList));     //将当前数据转换成一个JSON字符串

    }

    //生命周期函数      页面加载就会触发

    componentDidMount(){

        //获取缓存的数据

        var todolist = JSON.parse(localStorage.getItem('todolist'));       /*字符串*/ 

        if(todolist){

            this.setState({

                list:todolist
            })
        }
    }


    render() {
        return (
            <div>
               
                <header className="title">TodoList: 　<input ref="title" onKeyUp={this.addData} /> </header>

                <h2>待办事项</h2>

                <hr />

                <ul>
                    {
                        this.state.list.map((value,key)=>{

                            if(!value.checked){

                                return (

                                    <li key = {key}>

                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChage.bind(this,key)} />

                                        {value.title}


                                        -- <button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }

                        })


                    }
                </ul>           



                <h2>已完成事项</h2>

                <hr />
                <ul>
                    {
                        this.state.list.map((value,key)=>{

                            if(value.checked){

                                return (

                                    <li key = {key}>

                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChage.bind(this,key)} />

                                        {value.title}


                                        -- <button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }

                        })
                    }
                </ul>    


            </div>
        );
    }
}
export default Todolist;
