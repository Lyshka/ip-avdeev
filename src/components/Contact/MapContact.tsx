import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const MapContact = () => {
    return (
        <YMaps query={{
            apikey: "3f9e23f5-c411-4d66-a698-9c6faa3595eb"
        }}>
            <Map
                className='w-full h-full'
                defaultState={{
                    center: [55.75, 37.57],
                    zoom: 9,
                    controls: ["zoomControl", "fullscreenControl"],
                }}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
                <Placemark defaultGeometry={[55.75, 37.57]} />
            </Map>
        </YMaps>
    )
}