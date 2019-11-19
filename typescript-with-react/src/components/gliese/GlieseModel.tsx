
export default interface GlieseModel {
    VisierID: number;
    Name: string;
    Comp: string | null;
    ProperMotion: number | null;
    ProperMotionAngle: number | null;
    RadialVelocity: number | null;
    SpectralType: string | null;
    VisualMagnitude: number | null;
    BV: number | null;
    UB: number | null;
    Parallax: number | null;
    AbsoluteMagnitude: number | null;
    DM: string | null;
}