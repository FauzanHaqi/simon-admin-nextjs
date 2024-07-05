import Navbar from "@/components/Navbar/page";

export default function TambahDataSiswa() {
  return (
    <div>
      <h1 className="font-medium text-gray-900 dark:text-black h-6 mx-12 pt-2">
        Tambah Data
      </h1>
      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-400" />

      <form>
        <div className="gap-4">
          <div>
            <label
              htmlFor="name"
              className="mr-7 font-medium text-gray-900 dark:text-black"
            >
              Nama :
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/5 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan nama..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="mr-7 font-medium text-gray-900 dark:text-black"
            >
              NIS :
            </label>
            <input
              type="text"
              id="nis"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/5 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan NIS..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="tempat"
              className="mr-7 font-medium text-gray-900 dark:text-black"
            >
              Tempat/Tgl Lahir:
            </label>
            <input
              type="tempat"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/5 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan Tempat/Tgl Lahir:..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="agama"
              className="mr-7 font-medium text-gray-900 dark:text-black"
            >
              Agama :
            </label>
            <input
              type="text"
              id="agama"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/5 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan Agama..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="kelas"
              className="mr-7 font-medium text-gray-900 dark:text-black"
            >
              Kelas :
            </label>
            <input
              type="text"
              id="kelas"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/5 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan Kelas..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="jurusan"
              className="mr-7 font-medium text-gray-900 dark:text-black"
            >
              Jurusan :
            </label>
            <input
              type="text"
              id="jurusan"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/5 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan Jurusan..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="noTelpon"
              className="mr-7 font-medium text-gray-900 dark:text-black"
            >
              No Telpon :
            </label>
            <input
              type="text"
              id="noTelpon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/5 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan No Telpon..."
              required
            />
          </div>
          <div className="flex items-center space-x-4">
            <label
              htmlFor="jenis-kelamin"
              className="mr-7 font-medium text-gray-900 dark:text-black"
            >
              Jenis Kelamin:
            </label>

            <div className="flex items-center">
              <input
                type="radio"
                id="option1"
                name="radiogroup"
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <label htmlFor="option1" className="ml-2 text-gray-700">
                Laki-Laki
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="option2"
                name="radiogroup"
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <label htmlFor="option2" className="ml-2 text-gray-700">
                Perempuan
              </label>
            </div>
          </div>

          <div />
        </div>
        <div className="m-3">
          <button className="p-1.5 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
            Batalkan
          </button>
          <button className="p-1.5 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
            Simpan
          </button>
          {/* <button className="text-biru border border-biru p-1.5 rounded-lg">Batalkan</button> */}
        </div>
      </form>
    </div>
  );
}
