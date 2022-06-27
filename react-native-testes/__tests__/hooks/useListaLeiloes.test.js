import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";
import useListaLeiloes from "../../src/hooks/useListaLeiloes";
import { obtemLeiloes } from "../../src/repositorio/leilao";

jest.mock("../../src/repositorio/leilao");

const mockLeiloes = [
  {
    id: 1,
    nome: "Leilão 1",
    descricao: "Descrição do Leilão 1",
  },
];

const mockLeiloesAtualizada = [
  {
    id: 1,
    nome: "Leilão 1",
    descricao: "Descrição do Leilão 1",
  },
  {
    id: 2,
    nome: "Leilão 2",
    descricao: "Descrição do Leilão 2",
  },
];

describe("src/hooks/useListaLeiloes", () => {
  obtemLeiloes.mockImplementation(() => mockLeiloes);

  it("deve retornar uma lista de leilões e uma função para atualizar leilões", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useListaLeiloes());

    expect(result.current[0]).toEqual([]);

    await waitForNextUpdate();

    expect(result.current[0]).toEqual(mockLeiloes);

    // obtemLeiloes.mockImplementation(() => mockLeiloesAtualizada);

    // await act(() => {
    //  result.current[1]();
    // });

    // expect(result.current[0]).toEqual(mockLeiloesAtualizada);
  });
});
