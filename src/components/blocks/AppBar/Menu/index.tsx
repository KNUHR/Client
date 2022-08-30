import Button from "../../../atoms/Button";

type MenuProps = {
  opened?: boolean;
};

export default function Menu({ opened = false }: MenuProps) {
  return (
    <div className={`w-fit absolute -translate-x-28 ${!opened && "invisible"}`}>
      <div
        className="
          flex flex-col space-y-1
          w-44 py-1
          border rounded-md
          shadow-md bg-white
        "
      >
        <Button variant="text" role="my-page">
          내 정보
        </Button>
        <Button variant="text" role="meetings">
          모임 관리
        </Button>
        <Button variant="text" role="chatting">
          채팅
        </Button>
        <div className="border-b my-1" />
        <Button variant="text" role="logout">
          로그아웃
        </Button>
      </div>
    </div>
  );
}
