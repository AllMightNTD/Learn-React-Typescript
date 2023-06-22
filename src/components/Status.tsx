import React from 'react'

/**
 * Yêu cầu : Hiển thị 1 trong 3 trạng thái tùy thuộc vào props truyên vào
 * 
 */

type StatusProps = {
    // Chỉ có thể truyền 1 trong 3 chuỗi này 
    status : 'loading' | 'success' |  'error'
}

const Status = (props : StatusProps) => {
    let message 
    if(props.status == 'loading'){
        message = 'Loading....'
    }else if(props.status == 'success'){
        message = 'Data fetched successfully'
    }else if(props.status == 'error'){
        message = 'Error fetching data'
    }else{
        message = 'Exception'
    }
  return (
    <div>
        <h2>{message}</h2>
    </div>
  )
}

export default Status