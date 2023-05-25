const OrderedList = ({
    children,
    ...props
  }: {
    children: React.ReactNode;
  } & React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="root" {...props}>
      {children}
      <style jsx>{`
        .root {
          margin: 0 0 var(--vRythm) 0;
          padding: 0 0 0 var(--gutter);
        }
      `}</style>
    </ol>
  );
  
  export default OrderedList;