import { useState } from "react";
import Button from "../../atoms/Button";
import Menu from "./Menu";

type AppBarProps = {
  loggedIn?: boolean;
};

export default function AppBar({ loggedIn = false }: AppBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border-b">
      <div className="container mx-auto max-w-screen-lg px-3">
        <div className="flex align-center py-3">
          <div
            className="
            self-center
            flex-grow 
            text-xl font-bold text-rose-500
          "
          >
            KNU 인력사무소
          </div>
          <div>
            {loggedIn ? (
              <>
                <Button role="menu" onClick={toggleMenu}>
                  Menu
                </Button>
                <Menu opened={isOpen} />
              </>
            ) : (
              <Button role="login">Login</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
