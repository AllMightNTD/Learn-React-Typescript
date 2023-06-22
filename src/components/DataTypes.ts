export type InfoProps = {
  info: {
    firstName: string;
    lastName: string;
    age: number;
    address: string;
  };
};
export // Định nghĩa data types props khi chuyền vào 1 component làm children
type Oscarprops = {
  children: React.ReactNode;
};

export type PersonListProps = {
  // Chỉ định array để lặp
  names: {
    first: string;
    last: string;
  }[];
};

// Định nghĩa Data Types của nó 
export type InputProps = {
    value : string , 
    // Sự kiện thay đôi phản ứng => không cần trả về gì 
    handleChange: (event : React.ChangeEvent<HTMLInputElement>) => void
}


// Chỉ định kiểu cho thành phần con của component
export type ChildrenProps = {
    children : string
}


// Chỉ định type của Props
export type GreetProps ={
    name:string,
    age:number,
    check:boolean
}

// Chỉ định các style truyền vào dưới dạng props
export type ContainerProps = {
    styles : React.CSSProperties;
}


export type ButtonProps = {
    // Định nghĩa hàm theo sự kiện click không trả về cái gì
    // Nhận vào 2 tham số event và id và truyền ngược lên cha 
    handleClick: (event : React.MouseEvent<HTMLButtonElement> , id:number) => void
}
