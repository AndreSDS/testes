interface SideBarProps {
  items: {
    name: string;
    href: string;
  }[];
}

export const SideBar = ({ items }: SideBarProps) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.href}>
          <a role="navigation" href={item.href}>{item.name}</a>
        </div>
      ))}
    </div>
  );
};
