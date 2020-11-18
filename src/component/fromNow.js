import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn';//引入dayjs的语言
dayjs.extend(relativeTime);//引入dayjs的插件
dayjs.locale('zh-cn');// 全局使用

export default function FromNow(props){
    const {time} = props;
    return dayjs(time).fromNow()
}