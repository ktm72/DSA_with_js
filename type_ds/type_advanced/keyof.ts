export type Event =
  | { type: "LogIn"; payload: { userId: string } }
  | { type: "SignOut" };

const sendEvent = <Type extends Event["type"]>(
  ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
    ? [type: Type, payload: TPayload]
    : [type: Type]
) => {};

sendEvent("SignOut");
sendEvent("LogIn", { userId: "123" });
