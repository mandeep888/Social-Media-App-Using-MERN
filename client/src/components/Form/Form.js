import React,{useState} from "react";
import useStyles from './style'
import {TextField , Typography , Button , Paper} from "@material-ui/core"
import FileBase from "react-file-base64"
const Form =()=>{
    const [postData,setPostData] = useState({
        creator:"",
        title:"",
        message:"",
        tags:"",
        selectedFile:""
    });
    const classes = useStyles();
    const handleSubmit =()=>{

    }
    const clear =()=>{

    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    Create a Memory
                </Typography>
                <TextField  name="creator" label="Creator" variant="outlined" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}></TextField>
                <TextField  name="title" label="Title" variant="outlined" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}></TextField>
                <TextField  name="message" label="Message" variant="outlined" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}></TextField>
                <TextField  name="tags" label="Tags" variant="outlined" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})}></TextField>
            </form>
            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/>
            </div>
            <Button style={{marginTop:10}} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button style={{marginTop:10}} variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
        </Paper>
    )
}
export default Form;