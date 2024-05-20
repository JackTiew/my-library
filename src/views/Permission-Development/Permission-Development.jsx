const PermissionDevelopment = () => {

    const READ = 0b1;       //0001
    const WRITE = 0b10;     //0010
    const UPDATE = 0b100;   //0100
    const DELETE = 0b1000;  //1000

    const permission = DELETE | READ | WRITE;

    const checkPermission = (perm) => {
        //& means both need to be 1 only can be true
        return permission & perm;
    }

    const changePermission = (perm) => {
        //^ means if both same then 0, both different then 1
        return permission ^ perm;
    }

    return (
        <div>
            <span style={{ display: 'block' }}>Can Read: {checkPermission(READ) ? 'Yes' : 'No'}</span>
            <span style={{ display: 'block' }}>Can Write: {checkPermission(WRITE) ? 'Yes' : 'No'}</span>
            <span style={{ display: 'block' }}>Can Update: {checkPermission(UPDATE) ? 'Yes' : 'No'}</span>
            <span style={{ display: 'block' }}>Can Delete: {checkPermission(DELETE) ? 'Yes' : 'No'}</span>
        </div>
    )
}

export default PermissionDevelopment;