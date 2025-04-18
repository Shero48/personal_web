import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

let initialState={
    menu:'home',
    pro:0,
    btn:false,
    load:true,
    user:[],
    err:'',
    single:[],
    single_load:true,
    single_err:'',
    send:[],
    send_btn:false,
    send_err:''
}

export const getpost=createAsyncThunk("new/getpost",async(id)=>{
    if(id){
        const data =await fetch(`${process.env.NEXT_PUBLIC_url}/${id}`);
        return await data.json();
    }
    const data =await fetch(process.env.NEXT_PUBLIC_url)
    return await data.json();
})
export const getsingle=createAsyncThunk("new/getsingle",async(id)=>{
    if(id){
        const data =await fetch(`${process.env.NEXT_PUBLIC_url}/${id}`);
        return await data.json();
    }
})
export const send_msg=createAsyncThunk("new/send_msg",async(data)=>{
        try{
        const value =await fetch(`${process.env.NEXT_PUBLIC_url}/msg`,{method:"post",headers:{"Content-Type": "application/json"},body:JSON.stringify(data)});
        return await value.json();
        }catch(err){
            return err;
        }
})

const slilice=createSlice({
    name:'new',
    initialState,
    reducers:{
        change_nav:(state,action)=>{
            state.menu=action.payload;
            state.btn=false
        },
        change_btn:(state,action)=>{
            state.btn?state.btn=false:state.btn=true
        },
        increment:(state,action)=>{
            state.pro++
            if(state.pro==7){
                state.pro=0;
                return;
            }
        },
        decrement:(state,action)=>{
            if(state.pro==0){
                state.pro=6
                return;
            }
            state.pro--
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getpost.pending,(state,action)=>{
            state.load=true
        })
        .addCase(getpost.fulfilled,(state,action)=>{
                state.user=action.payload;
                state.load=false
        })
        .addCase(getpost.rejected,(state,action)=>{
                state.err='somthing went wrong';
                state.load=false
        }).addCase(getsingle.pending,(state,action)=>{
                state.single_load=true
        })
        .addCase(getsingle.fulfilled,(state,action)=>{
                state.single=action.payload;
                state.single_load=false
        })
        .addCase(getsingle.rejected,(state,action)=>{
                state.single_err='somthing went wrong';
                state.single_load=false
        })
        .addCase(send_msg.pending,(state,action)=>{
                state.send_btn=true
        })
        .addCase(send_msg.fulfilled,(state,action)=>{
                state.send=action.payload;
                state.send_btn=false
        })
        .addCase(send_msg.rejected,(state,action)=>{
                state.send_err='somthing went wrong';
                state.send_btn=false
        })
    }
})
export const{change_nav,change_btn,increment,decrement}=slilice.actions;
export default slilice.reducer;