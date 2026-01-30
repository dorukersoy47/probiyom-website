"use client";

import { useEffect, useRef } from "react";
import "ol/ol.css";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";

type ContactMapProps = {
    lon: number;
    lat: number;
    zoom?: number;
};

export default function ContactMap(props: ContactMapProps) {
    const { lon, lat, zoom = 15 } = props;

    const mapDivRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<Map | null>(null);

    useEffect(() => {
        if (!mapDivRef.current) return;

        const center = fromLonLat([lon, lat]);

        const markerFeature = new Feature({
            geometry: new Point(center),
        });

        markerFeature.setStyle(
            new Style({
                image: new CircleStyle({
                    radius: 10,
                    fill: new Fill({ color: "#22577A" }),
                    stroke: new Stroke({ color: "#FFFFFF", width: 2 }),
                }),
            })
        );

        const vectorLayer = new VectorLayer({
            source: new VectorSource({
                features: [markerFeature],
            }),
        });

        const map = new Map({
            target: mapDivRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                vectorLayer,
            ],
            view: new View({
                center,
                zoom,
            }),
            controls: [],
        });

        mapRef.current = map;

        const updateSize = () => {
            map.updateSize();
        };

        const raf1 = window.requestAnimationFrame(() => {
            updateSize();
            const raf2 = window.requestAnimationFrame(() => {
                updateSize();
            });
            window.cancelAnimationFrame(raf2);
        });

        const onResize = () => updateSize();
        window.addEventListener("resize", onResize);

        return () => {
            window.cancelAnimationFrame(raf1);
            window.removeEventListener("resize", onResize);
            map.setTarget(undefined);
            mapRef.current = null;
        };
    }, [lon, lat, zoom]);

    return (
        <div className="w-full overflow-hidden rounded-xl border border-black/10">
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                <div ref={mapDivRef} className="absolute inset-0 h-full w-full" />
            </div>
        </div>
    );
}
