import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";

import EnviaLance from "../../../../src/telas/leilao/componentes/EnviaLance";
import { ENVIADO, NA0_ENVIADO } from "../../../../src/telas/leilao/constantes/estados";

describe("telas/leilao/componentes/EnviarLance", () => {
  it("deve enviar um lance quando o botão for pressionado", async () => {
    const enviaLance = jest.fn(
      () => new Promise((resolve) => resolve(ENVIADO))
    );

    const { getByPlaceholderText, getByA11yHint, getByText } = render(
      <EnviaLance enviaLance={enviaLance} cor="blue" />
    );

    const input = getByPlaceholderText("R$");
    const button = getByA11yHint("Enviar lance");

    fireEvent.changeText(input, "10");
    fireEvent.press(button);

    expect(enviaLance).toHaveBeenCalledWith("10");

    await waitFor(() => {
      expect(getByText(ENVIADO)).toTruthy();
    })

    expect(() => getByText(NA0_ENVIADO)).toThrow();
  });
});
