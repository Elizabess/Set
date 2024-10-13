import Team from '../team';
import Character from '../character';

describe('Team', () => {
    let team;
    let character1;
    let character2;

    beforeEach(() => {
        team = new Team();
        character1 = new Character('Hero1');
        character2 = new Character('Hero2');
    });

    test('should add a character to the team', () => {
        team.add(character1);
        expect(team.toArray()).toContain(character1);
    });

    test('should throw an error when adding the same character twice', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow('Character already exists in the team');
    });

    test('should add multiple characters at once without duplicates', () => {
        team.addAll(character1, character2);
        expect(team.toArray()).toEqual(expect.arrayContaining([character1, character2]));
    });

    test('should not throw an error when adding duplicates with addAll', () => {
        team.add(character1);
        team.addAll(character1, character2);
        expect(team.toArray()).toEqual(expect.arrayContaining([character1, character2]));
    });

    test('should convert Set to Array correctly', () => {
        team.add(character1);
        team.add(character2);
        expect(team.toArray()).toEqual([character1, character2]);
    });
});
