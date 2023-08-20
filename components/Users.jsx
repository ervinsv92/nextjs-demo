"use client" //Esto hace que el componente sea como react vanilla, o sea se renderiza del lado del cliente, como react puro

import {useRouter} from 'next/navigation';

const Users = ({users}) => {

    const router = useRouter();

  return (
    <ul className='list-group'>
            {
                users.map((user)=>(
                    <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center' key={user.id} onClick={()=>{
                        router.push(`/users/${user.id}`)
                    }}>
                        <div>
                            <h5>{user.id} - {user.first_name} - {user.last_name}</h5>
                            <p>{user.email}</p>
                        </div>
                        <img src={user.avatar} alt="" style={{borderRadius:"50%"}}/>
                    </li>
                ))
            }
        </ul>
  )
}

export default Users