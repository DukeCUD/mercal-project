import { Typography } from 'antd';
import { Timeline } from 'antd';
const { Title } = Typography;

const Update=()=>{
    return( <div style={{ width: '300px',
        height:' 300px',
        margin:' 100px auto '}}>
        <Title style={{textAlign:"center",fontFamily:"JetBrains Mono"}}>New Update</Title>
        <Timeline
        style={{ paddingTop:"20px"}}

            items={[
                {
                    children: 'Create a services site 2015-09-01',
                },
                {
                    children: 'Solve initial network problems 2015-09-01',
                },
                {
                    children: 'Technical testing 2015-09-01',
                },
                {
                    children: 'Network problems being solved 2015-09-01',
                },
            ]}
        />
    </div>)
}
export default Update