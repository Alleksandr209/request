type Role = `admin` | `moderator` | `user`

type Gender = `female` | `male`

enum idFirstLastNameRole  {
    Url = `https://dummyjson.com/users`
}

interface userJson {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender,
    password: string,
    role: Role
}


async function fetchUsers () {

    try  {
    const request = await fetch(idFirstLastNameRole.Url)
    if (!request.ok) {
      throw new Error(`Ошибка сервера: ${request.status}`);
    }
        let data = await request.json() as {users: userJson[]}
        data.users.forEach(user => console.log(`${user.id}, ${user.firstName},  ${user.lastName}, ${user.age}, ${user.role},`))
        
    } catch (Error) {
        console.log(`Ошибка`)
    }

}


fetchUsers()